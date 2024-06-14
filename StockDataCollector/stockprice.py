import yfinance as yf
from datetime import datetime
import psycopg2


def update_day_to_02(date):
    return datetime.strptime(date, '%Y-%m-%d').replace(day=5).strftime('%Y-%m-%d')

def format_date(input_date):
    # Giriş ve çıkış formatları
    input_format = "%Y-%m-%d"
    output_format = "%Y/%-m"

    # Stringi datetime nesnesine dönüştür
    date_obj = datetime.strptime(input_date, input_format)

    # Yılı al
    year = date_obj.year

    # Ayı al ve önündeki sıfırı kaldır
    month = date_obj.month

    # Yeni formatta string oluştur
    formatted_date = f"{year}/{month}"

    return formatted_date

def tam_kisim_al(sayi):
    # Ondalık sayıyı string olarak al
    sayi_str = str(sayi)

    # Noktadan önceki tam kısmı al
    tam_kisim = sayi_str.split('.')[0]

    return tam_kisim

def stock_name_prepare(ticker):
    return ticker.replace(".IS", "")


def get_stock_prices_and_insert_to_db(tickers, dates):
    try:
        conn = psycopg2.connect(
            host="localhost",
            user="postgres",
            port="5432",
            password="0606",
            database="dbstock"
        )
        cursor = conn.cursor()
        print(f"Veritabanına bağlandı")
        print(conn.get_dsn_parameters(), "\n")

    except Exception as e:
        print(f"Veritabanına bağlanılamadı: {e}")
        return

    for ticker in tickers:
        stock = yf.Ticker(ticker)
        cursor.execute(f"DELETE FROM bilanco WHERE hisse_adi ='{stock_name_prepare(ticker)}' AND bilanco_kalemi = '{stock_name_prepare(ticker)}_price'" )

        for date in dates:

            stock_data = stock.history(start=date, end=update_day_to_02(date))

            if not stock_data.empty:
                close_price = stock_data['Close'][0]
                try:
                    cursor.execute("INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES (%s, %s, %s,%s)",(stock_name_prepare(ticker), stock_name_prepare(ticker)+"_price",format_date(date), tam_kisim_al(close_price)));
                    print(f"Inserted data for {ticker} on {date}")
                except Exception as e:
                    print(f"Failed to insert data for {ticker} on {date}: {e}")
            else:
                    cursor.execute("INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES (%s, %s, %s,%s)",(stock_name_prepare(ticker), stock_name_prepare(ticker)+"_price",format_date(date), None));

    conn.commit()
    cursor.close()
    conn.close()

def get_stock_inf(tickers):
    all_prices = []
    for ticker in tickers:

        stock = yf.Ticker(ticker)

        price_data = stock.history(period="max")
        
        if not price_data.empty:
            all_prices.append((ticker, price_data))
        else:
            all_prices.append((ticker, None))

    return all_prices


ticker = ['DGGYO.IS','OYYAT.IS','KCHOL.IS']

dates = ['2024-03-01', '2023-12-01', '2023-09-01', '2023-06-01', '2023-03-01', '2022-12-01', '2022-09-01', '2022-06-01', 
         '2022-03-01', '2021-12-01', '2021-09-01', '2021-06-01', '2021-03-01', '2020-12-01', '2020-09-01']


get_stock_prices_and_insert_to_db(ticker, dates)
