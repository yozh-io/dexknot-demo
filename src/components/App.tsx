import { useCallback, useState } from 'react'
import { SwapWidget, SUPPORTED_LOCALES, SupportedLocale, SupportedChainId } from '@yozh-io/yozh-widget';
import { parseUnits } from '@ethersproject/units';

import styles from '../styles/Home.module.css'

export default function App() {
	const [locale, setLocale] = useState<SupportedLocale>('en')
	const onSelectLocale = useCallback((e) => setLocale(e.target.value), [])
	return (
		<div className={styles.container}>
			<div className={styles.i18n}>
				<select onChange={onSelectLocale}>
					{SUPPORTED_LOCALES.map((locale: {} | null | undefined) => (
						// @ts-ignore
						<option key={locale} value={locale}>
							{locale}
						</option>
					))}
				</select>
			</div>

			<main className={styles.main}>
				<h1 className={styles.title}>Swap Widget</h1>
				<div className={styles.demo}>
					<SwapWidget
						// theme={darkTheme}
						locale={locale}
						width={400}
						defaultTypedValue={{
							[SupportedChainId.MAINNET]: parseUnits('1', 18).toString(),
							[SupportedChainId.BINANCE]: parseUnits('1', 18).toString(),
							[SupportedChainId.POLYGON]: parseUnits('1', 18).toString(),
							[SupportedChainId.FANTOM]: parseUnits('1', 18).toString(),
							[SupportedChainId.ARBITRUM_ONE]: parseUnits('1', 18).toString(),
							[SupportedChainId.AVALANCHE]: parseUnits('1', 18).toString(),
						}}
					  defaultInputTokenAddress={{
	            [SupportedChainId.MAINNET]: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
						  [SupportedChainId.BINANCE]: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
						  [SupportedChainId.POLYGON]: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
						  [SupportedChainId.FANTOM]: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
						  [SupportedChainId.ARBITRUM_ONE]: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
						  [SupportedChainId.AVALANCHE]: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            }}
            defaultOutputTokenAddress={{
	            [SupportedChainId.MAINNET]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
	            [SupportedChainId.BINANCE]: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
	            [SupportedChainId.POLYGON]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
	            [SupportedChainId.FANTOM]: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
	            [SupportedChainId.ARBITRUM_ONE]: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
	            [SupportedChainId.AVALANCHE]: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
            }}/>
				</div>
			</main>
		</div>
	)
}
