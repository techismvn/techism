import { Rate } from 'antd';
import styles from './reviewCard.module.scss';

function ReviewCard({ reviewData }) {

    return (
        <div className={styles.cardContainer}>
            <div className={styles.reviewCard}>
                <div className={styles.cusInfo}>
                    <img src={reviewData.avatar} alt={reviewData.cusName} className={styles.avatar} />
                    <div className={styles.info}>
                        <div className={styles.cusName}>{reviewData.cusName}</div>
                        <div className={styles.cusJob}>{reviewData.job}</div>
                        <Rate className={styles.cusRating} allowHalf disabled defaultValue={reviewData.rating} />
                    </div>
                </div>
                <div className={styles.reviewContent}>
                    {reviewData.review}
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;