import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import '../../styles/forms/modal-form.css';

const ModalForm = () => {
    
    const [count, setCount] = useState('12');

    return(
        <form className="modal__form">
            <div className="form__title">Сохранить запрос</div>
            <div className="form__field">
                <div className="field__title">Запрос</div>
                <input type="text" className="field__field"/>
            </div>
            <div className="form__field">
                <div className="field__title">* Название</div>
                <input type="text" className="field__field"/>
            </div>
            <div className="form__field">
                <div className="field__title">Сортировать по</div>
                <select className="field__field">
                    <option value="По релевантности" selected>По релевантности</option>
                    <option value="По дате загрузки">По дате загрузки</option>
                    <option value="По числу просмотров">По числу просмотров</option>
                    <option value="По рейтингу">По рейтингу</option>
                </select>
            </div>
            <div className="form__slider">
                <div className="slider__title">
                    Максимальное количество
                </div>
                <div className="slider__body">
                    <ReactSlider
                        className="slider"
                        max="50"
                        thumbClassName="slider__thumb"
                        trackClassName="slider__track"
                        defaultValue={count}
                        renderThumb={(props, state) => {
                            setCount(state.valueNow);
                            return <div {...props}></div>
                        }}
                    />
                    <div className="slider__count">
                        {count}
                    </div> 
                </div>      
            </div>
            <div className="form__buttons">
                <input type="reset" value="Не сохранять" className="buttons__cancel"/>
                <input type="submit" value="Сохранить" className="buttons__submit"/>
            </div>
        </form>
    )
}

export default ModalForm;