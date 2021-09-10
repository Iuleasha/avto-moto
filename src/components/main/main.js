import Slider from '../slider/slider';
import './main.scss';
import Description from '../description/description';

function Main() {
    return (
        <section className="content">
            <div className="content__wrapper">
                <Slider />
                <Description />
            </div>
        </section>
    );
}

export default Main;
