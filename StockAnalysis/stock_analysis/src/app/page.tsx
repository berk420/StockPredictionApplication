"use client";

import { useEffect } from 'react';
import { fetchData } from './DataService/pages';
import styles from './style.module.css';
import { createGeneralHtml, drawLineChart, financialStatementGraph } from './DomHandler/page';
import { financial_statement, stock_name } from './StockType/pages';

export default function Home() {
    let sayac: boolean = true;
    async function getData() {
        sayac = false;

        (await stock_name().then()).forEach(async stock_name => {
            await createGeneralHtml(stock_name);
            (await financial_statement().then()).forEach(async financial_statement => {
                await financialStatementGraph(stock_name, financial_statement);

                let result = await fetchData(stock_name, stock_name + financial_statement);
                await drawLineChart(result, stock_name, financial_statement, stock_name + financial_statement);

                if ('error' in result) {
                    console.log('error');
                }
            });
        });
    }
    useEffect(() => {
        if (sayac) {
          getData();
        }
      }, [sayac]); // Bağımlılık dizisine "sayac" eklendi.
      
    return (
        <div className={styles.allElement} id="allelement"></div>
    );
}
