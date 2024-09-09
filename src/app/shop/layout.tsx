import React from "react"
import ShopHeader from "@/components/molecule/header/shopHeader"

export default function StoreLayout({
	children
}: {
	children: Readonly<React.ReactNode>
}) {
	return (
		<main>
			<ShopHeader />
			{children}
		</main>
	)
}
