import { Card } from "../Card/Card";
import data from "../../data/data.json";
import styles from "./CardList.module.scss";

export function CardList() {
	return (
		<>
			<div className={styles.card__list}>
				{data.map((props) => (
					<Card
						key={props.id}
						title={props.title}
						price={props.price}
						speed={props.speed}
						description={props.description}
						color={props.color}
					/>
				))}
			</div>
		</>
	);
}
