import "./OrderPizza.css"
import InputMapping from './OrderScreenComponents/InputMapping';
import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import RadioMapping from "./OrderScreenComponents/RadioMapping";
import SizeSelectionMapping from "./OrderScreenComponents/SizeSelectionMapping";
import DoughSelectionMapping from "./OrderScreenComponents/DoughSelectionMapping";

const sizeSelectionOptions = ["S", "M", "L"]

const initialForm = {
    pizzaToppings: [],
    quantity: 1,
    selectedOption: "S",
    selectedDough: "",
    price: 0,
    totalPrice: 85.50,
    orderNote: "",
};

const initialErrors = {
    pizzaToppings: true,
    selectedDough: true,
    orderNote: true,
}

export const errorMessages = {
    pizzaToppings: "En az 4 malzeme eklemelisiniz.",
    selectedDough: "Hamur kalınlığı seçmelisiniz.",
    orderNote: "En az 3 karakterli bir not eklemelisiniz"
}

function OrderPizza(props) {

    const { setPizzaData } = props;

    const [form, setForm] = useState(initialForm)
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState(initialErrors)

    const history = useHistory();

    const handleChange = (event) => {
        console.log(event.target)
        let { id, value, name } = event.target;

        if (id === "pizzaToppings" && event.target.checked) {
            setForm({ ...form, [id]: [...form[id], value] })
        } else if (id === "pizzaToppings" && !event.target.checked) {
            setForm({ ...form, [id]: form[id].filter((malzeme) => malzeme !== event.target.value) })

        }

        else if (name === 'sizeSelection' && event.target.checked) {
            setForm({ ...form, ['selectedOption']: value })
        }

        else if (id === 'selectedDough') {
            setForm({ ...form, [id]: value })
        }

        else if (id === 'orderNote') {
            setForm({ ...form, [id]: value })
        }

        // errors


        if (id === "pizzaToppings") {
            const selectedToppings = document.querySelectorAll('input[id="pizzaToppings"]:checked');
            console.log(event.target)
            if (selectedToppings.length >= 4)
                setErrors({ ...errors, [id]: false });
            else {
                setErrors({ ...errors, [id]: true })
            }
        }

        if (id === "selectedDough") {
            if (!value == "")
                setErrors({ ...errors, [id]: false });
            else {
                setErrors({ ...errors, [id]: true })
            }
        }

        if (id === "orderNote") {
            console.log(form.orderNote)
            if (value && value.length >= 3)
                setErrors({ ...errors, [id]: false });
            else {
                setErrors({ ...errors, [id]: true })
            }
        }

    };

    useEffect(() => {
        setForm((prevForm) => ({
            ...prevForm,
            price: (prevForm.pizzaToppings || []).length * 5
        }));
    }, [form.pizzaToppings]);

    useEffect(() => {
        setForm((prevForm) => ({
            ...prevForm,
            totalPrice: (prevForm.quantity * (85.50 + (prevForm.price || 0)))
        }));
    }, [form.quantity, form.price]);

    useEffect(() => {

        if (
            form["selectedDough"] !== "" &&
            form["pizzaToppings"].length >= 4 &&
            (form["orderNote"] && form["orderNote"].length >= 3)
        ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [form]);


    const handleButton = ((event) => {
        const { value, name } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: event.currentTarget.value,
            selectedOption: event.currentTarget.value,
        }));
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        await axios
            .post('https://reqres.in/api/pizza', { form })
            .then((res) => {
                setPizzaData(res.data);
                console.log(res.data);
                if (res.data) {
                    history.push('/order-pizza/success');
                }
            })
            .catch((error) => {
                console.error(error);
            });

    };


    const decrementQuantity = () => {
        if (form.quantity >= 1) {
            setForm((prevForm) => ({
                ...prevForm,
                quantity: prevForm.quantity - 1
            }));
        }
    }

    const incrementQuantity = () => {
        setForm((prevForm) => ({
            ...prevForm,
            quantity: prevForm.quantity + 1
        }));
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "white" }}>
            <div className="orderHeader">
                <h1>Teknolojik Yemekler</h1>
                <h2>Anasayfa - <span className="siparis-olustur" >Sipariş Oluştur</span></h2>
            </div>
            <div className="after-header-desktop">
                <div className="order-textbox-desktop">
                    <img className="pizza-image" src="../../Assets/Iteration-2-aseets/pictures/form-banner.png"></img>
                </div>
                <div className="order-textbox-desktop2">
                    <h1>Anasayfa - <span className="siparis-olustur-desktop" >Sipariş Oluştur</span></h1>
                </div>
                <div className="order-textbox">
                    <h1>Position Absolute Acı Pizza</h1>
                    <div className="order-textbox2">
                        <h2>85.50₺</h2>
                        <div className="order-textbox2-group">
                            <h3>4.9</h3>
                            <h3>(200)</h3>
                        </div>
                    </div>
                </div >
                <div className="order-rest" style={{ margin: "4rem 0 4rem 0" }}>
                    <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>
            </div>

            <div className="order-rest" style={{ marginTop: "4rem" }}>
                <div className="order-first-form">
                    <RadioMapping selectedOption={form.selectedOption} handleChange={handleChange} sizeSelectionOptions={sizeSelectionOptions} />
                    <SizeSelectionMapping selectedOption={form.selectedOption} handleButton={handleButton} sizeSelectionOptions={sizeSelectionOptions} />
                    <DoughSelectionMapping handleChange={handleChange} errorMessages={errorMessages} errors={errors} />
                </div>
                <div className="additionalIngredients">
                    <p>Ek Malzemeler</p>
                    <InputMapping
                        id="pizzaToppings"
                        handleChange={handleChange}
                        baslik="En Fazla 10 malzeme seçebilirsiniz. 5₺"
                        invalid={errors.pizzaToppings}
                    />
                    {errors.pizzaToppings && <FormFeedback data-cy="error-message">{errorMessages.pizzaToppings}</FormFeedback>}
                </div>
                <div style={{ width: "100%" }}>
                    <FormGroup style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.6rem",
                        width: "100%",
                        paddingBottom: "4rem",
                        borderBottom: "1px solid #5F5F5F80"
                    }}>
                        <Label for="orderNote">
                            <span style={{
                                fontFamily: "Barlow",
                                fontSize: "2.2rem",
                                fontWeight: "600",
                                lineHeight: "2.476rem",
                                textAlign: "left",
                                color: "#292929",

                            }}>Sipariş Notu</span>
                        </Label>
                        <Input
                            id="orderNote"
                            name="text"
                            type="textarea"
                            rows="2"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            onChange={handleChange}
                            data-cy="orderNote"
                            invalid={errors.orderNote}
                        />
                        {errors.orderNote && <FormFeedback data-cy="error-message">{errorMessages.orderNote}</FormFeedback>}
                    </FormGroup>
                </div>
                <div className="orderPriceContainerAdaptive">
                    <div className="orderPrice">
                        <h3>Sipariş Toplamı</h3>
                        <div className="orderPrice-a" >
                            <h4>Seçimler</h4>
                            <h4>{form.price.toFixed(2)}₺</h4>
                        </div>
                        <div className="orderPrice-red">
                            <h4 style={{ color: "red" }}>Toplam</h4>
                            <h4 style={{ color: "red" }}>{form.totalPrice.toFixed(2)}₺</h4>
                        </div>
                    </div>
                    <div className="orderLastPart">
                        <div className="orderLast-1">
                            <button className="changeButton" onClick={decrementQuantity}>
                                -
                            </button>
                            <span className="quantity">{form.quantity}</span>
                            <button className="changeButton" style={{ borderRadius: "0 0.6rem 0.6rem 0" }} onClick={incrementQuantity}>
                                +
                            </button>
                        </div>
                        <div className="orderLast-2">
                            <button className="orderButton" onClick={handleSubmit} disabled={!isValid} data-cy="submit-button">
                                SİPARİŞ VER
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
};

export default OrderPizza