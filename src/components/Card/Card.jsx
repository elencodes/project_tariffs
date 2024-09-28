import styles from "./Card.module.scss";

export function Card(props) {
	const bigCard = `${styles.card} ${styles.focus}`;
	const standartCard = `${styles.card}`;

	return (
		<>
			<div
				className={`${
					props.title === "Безлимитный 550"
						? `${bigCard}`
						: `${standartCard}`
				}`}
			>
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
