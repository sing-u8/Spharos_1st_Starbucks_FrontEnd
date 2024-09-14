import MainProductCarousel from "@/components/atom/carousel/mainProductCarousel"
import ProductGroupList from "@/components/molecule/product/productGroupList"

// dummy-data
import { productGroupData } from "@/dummy/product-group-data"

export default function MainPage() {
	return (
		<section>
			<MainProductCarousel />
			<div className="py-8 flex flex-col gap-12">
				{productGroupData.map((groupItem, index) => (
					<ProductGroupList key={index} groupItem={groupItem} />
				))}
			</div>
		</section>
	)
}
