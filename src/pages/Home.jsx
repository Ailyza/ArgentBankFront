import Banner from "../components/Banner";
import FeatureItem from "../components/FeatureItem";
import features from "../data/features";

export default function Home() {
	return (
		<div>
			<Banner />
			<section className="features">
				
				{features.map((feature, index) => (
					<FeatureItem
						key={index}
						image={feature.image}
						alt={feature.alt}
						title={feature.title}
						content={feature.content}
					/>
				))}
			</section>
		</div>
	);
}
