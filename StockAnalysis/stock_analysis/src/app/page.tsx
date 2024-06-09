"use client";

import { useEffect, useState } from 'react';
import { fetchData } from './DataService/pages';
import styles from './style.module.css';
import { createGeneralHtml, drawLineChart, financialStatementGraph } from './DomHandler/pages';
import { financial_statement, stock_name, stock_long_name, financial_statement_Name } from './StockType/pages';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button,} from "@nextui-org/react";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { SwitchThumbIconProps } from "@nextui-org/react"; // İkon bileşeni, NextUI veya başka bir ikon kütüphanesinden alabilirsiniz
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Home() {
    let sayac: boolean = true;
    let [selectedCurrency, setSelectedCurrency] = useState('Lira'); // Varsayılan değer 'tr'
    const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));

    async function getData() {
        sayac = false;

        const allelementDiv = await document.getElementById("allelement");
        if (allelementDiv) {
            allelementDiv.innerHTML = '';
        }

        (await stock_name().then()).forEach(async stock_name => {
            await createGeneralHtml(stock_name, await stock_long_name(stock_name));
            (await financial_statement().then()).forEach(async financial_statement => {
                await financialStatementGraph(stock_name, financial_statement);

                let result = await fetchData(stock_name, stock_name + financial_statement);
                await drawLineChart(result, stock_name, financial_statement, selectedCurrency);

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
    }, [sayac, selectedCurrency]); // Bağımlılık dizisine "sayac" ve "selectedCurrency" eklendi.

    const handleSelectChange = (value: string) => {
        setSelectedCurrency(value);
        if (sayac) {
            getData();
        }
    }

    return (
        <div className={styles.pages}>
            <div className={styles.toolside} id='toolside'>

            <Table hideHeader aria-label="Example static collection table" className={styles.table}>
      <TableHeader>
        <TableColumn>ToolSide</TableColumn>

      </TableHeader>
      <TableBody>
        <TableRow key="1">
        <TableCell className={styles.tableCell}>

          <Dropdown className={styles.dropdown}>
                                    <DropdownTrigger className={styles.dropdowntrigger}>
                                    <Button className={styles.dropdownButton} variant="bordered" endContent={<ArrowDropDownIcon />}>
                                    {selectedCurrency}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu className={styles.dropdownMenu}>
                                        <DropdownItem className={styles.dropdownItem} onClick={() => handleSelectChange('Lira')}>Lira</DropdownItem>
                                        <DropdownItem className={styles.dropdownItem} onClick={() => handleSelectChange('Dollar')}>Dollar</DropdownItem>
                                    </DropdownMenu>
          </Dropdown>

          </TableCell>

        </TableRow>


      </TableBody>
    </Table>




            </div>
            <div className={styles.allElement} id="allelement"></div>
        </div>
    );
}
