import styles from './SampleProduct.module.scss';
import {data} from './data'

function SampleProduct() {

    return (
        <div className={styles.sampleProduct}>
            <div className={styles.title}>
                Những sản phẩm mẫu
            </div>
            <div className={styles.productWrapper}>
                {data.map((product, index) => (
                    <img className={styles.product} key={index} src={product.image} alt={product.alt} height='269' width='404' />
                ))}
            </div>
        </div>
    )
}

export default SampleProduct