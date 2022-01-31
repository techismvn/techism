import styles from './SampleProduct.module.scss';
import { data } from './data'

function SampleProduct() {

    return (
        <div className={styles.sampleProduct}>
            <div className={styles.title}>
                Những sản phẩm mẫu
            </div>
            <div className={styles.productWrapper}>
                {data.map((product, index) => (
                    <div  key={index} className={styles.imgWrapper}>
                        <img className={styles.productImg} src={product.image} alt={product.alt} height='269' width='404' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SampleProduct