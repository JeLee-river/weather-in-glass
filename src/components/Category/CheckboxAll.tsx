import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import styles from './CheckboxAll.module.scss';

function CheckboxAll() {
  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(true);

  //All 체크박스에서 체크 이벤트가 발생했을 때 실행할 핸들러
  const handleIsCheckedAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedAll(() => e.target.checked);
  };

  return (
    <>
      <div className={styles.checkboxContainer}>
        <label htmlFor='checkboxAll' className={styles.label}>
          <input
            type='checkbox'
            className={styles.checkboxAll}
            id='checkboxAll'
            checked={isCheckedAll}
            value='All'
            onChange={handleIsCheckedAll}
          />
          <span className={styles.checkmark}></span>All
        </label>
        <Checkbox
          isCheckedAll={isCheckedAll}
          setIsCheckedAll={setIsCheckedAll}
        />
      </div>
    </>
  );
}

export default CheckboxAll;
