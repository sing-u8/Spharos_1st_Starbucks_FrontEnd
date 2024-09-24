import ProductCategoryLink from "@/components/atom/product/productCategoryLink"
import { trimMainCategory } from "@/lib/actionUtils"
import { getMainProductCategoryAction } from "@/action/product-category/productCategoryAction"
import ProductCategoryPage from "@/components/page/product/productCategoryPage"

// note : might need to change h-lvh to another for ux
export default async function _ProductCategoryPage() {
	const mainProductCategList = await getMainProductCategoryAction()

	return (
		<ProductCategoryPage>
			{mainProductCategList.map((item, index) => (
				<ProductCategoryLink
					key={item.categoryCode}
					linkProps={{ href: item.categoryCode }}
					imageProps={{
						src: item.imageUrl,
						alt: `${item.categoryName}.jpg`
					}}
					title={trimMainCategory(item.categoryName)}
				/>
			))}
		</ProductCategoryPage>
	)
}
