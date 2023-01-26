import styles from './ModalBasic.module.css';
import PropTypes from 'prop-types'

function ModalBasic({ setModalOpen, id, title, content, writer }: PropTypes) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={closeModal}>
                X
            </button>
            <p>모달창입니다.</p>
        </div>
    );
}
export default ModalBasic;