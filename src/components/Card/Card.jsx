import { useState } from "react";
import styles from "./Card.module.scss";

export function Card(props) {
	const [isSelected, setIsSelected] = useState(false);

	const cardClass = isSelected
		? `${styles.card} ${styles.focus}`
		: styles.card;

	const cardSelected = () => {
		// состояние isSelected меняется на противоположное
		setIsSelected((prevIsSelected) => !prevIsSelected);
	};

	return (
		<>
			<div className={cardClass} onClick={cardSelected}>
				<p className={`${styles.card__title} ${props.color}`}>
					{props.title}
				</p>
				<p className={`${styles.card__description} ${props.color}`}>
					<span className={styles.card__price}>{props.price}</span> / мес
				</p>
				<p className={styles.card__speed}>{props.speed}</p>
				<p className={styles.card__footer}>{props.description}</p>
			</div>
		</>
	);
}
