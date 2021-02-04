import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './Stats.css';
import StatsRow from '../../Components/StatsRow';
import Spinner from '../../Components/Spinner/Spinner';
import { db } from '../../firebase';

const baseURL =
    'https://finnhub.io/api/v1/quote?symbol=AAPL&token=bvecinn48v6oh223bkh0';

const testData = [];
const Stats = () => {
    const [stocksData, setStocksData] = useState([]);
    const [myStocks, setMyStocks] = useState([]);
    const [loadingStocks, setloadingStocks] = useState(true);
    const [loadingmystocks, setloadingmystocks] = useState(true);
    const getMyStocks = useCallback(() => {
        db.collection('myStocks').onSnapshot((snapshot) => {
            const tempData = [];
            const promises = snapshot.docs.map((doc) => {
                return getStocksData(doc.data().ticker).then((res) => {
                    tempData.push({
                        id: doc.id,
                        data: doc.data(),
                        info: res.data,
                    });
                });
            });
            Promise.all(promises)
                .then(() => {
                    setMyStocks(tempData);
                    setloadingmystocks(false);
                })
                .catch((err) => {
                    setMyStocks([
                        {
                            data: { ticker: 'AAPL', shares: '20' },
                            info: { o: '127.91', c: '0.81' },
                        },
                    ]);
                    setloadingmystocks(false);
                    console.log(err);
                });
        });
    }, []);
    const getStocksData = (stock) => {
        return axios.get(baseURL).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        const stocksList = [
            'AAPL',
            'MSFT',
            'TSLA',
            'FB',
            'BABA',
            'UBER',
            'DIS',
            'SBUX',
        ];
        getMyStocks();
        const promises = stocksList.map((stock) => {
            return getStocksData(stock).then((res) => {
                testData.push({
                    name: stock,
                    ...res.data,
                });
            });
        });

        Promise.all(promises).then(() => {
            setStocksData(testData);
            setloadingStocks(false);
        });
    }, [getMyStocks]);

    return (
        <div className="stats">
            <div className="stats_container">
                <div className="stats_header">
                    <p>Stocks</p>
                </div>
                <div className="stats_content">
                    <div className="stats_rows">
                        {myStocks.map((stock) => (
                            <StatsRow
                                key={stock.data.ticker}
                                name={stock.data.ticker}
                                openPrice={stock.info.o}
                                volume={stock.data.shares}
                                price={stock.info.c}
                            />
                        ))}
                        {loadingmystocks && <Spinner />}
                    </div>
                </div>
                <div className="stats_header">
                    <p>Lists</p>
                </div>
                <div className="stats_content">
                    <div className="stats_rows">
                        {loadingStocks && <Spinner />}
                        {stocksData.map((stock) => (
                            <StatsRow
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
