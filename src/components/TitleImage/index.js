import { useCountdown } from './countdownHook';
import { Arrow, Wrapper, HeaderButton, Header, Subtext } from './TitleImage.styles';

var iOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);

function scrollDown() {
    window.scroll({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth',
        duration: 2000,
    });
}

const Countdown = ({ date }) => {
    const [days, hours, minutes, seconds] = useCountdown(date);
    if (days + hours + minutes + seconds <= 0) {
        return(<Subtext>MUNOG has begun!</Subtext>)
    }
    return(<Subtext>MUNOG 2023 begins in {days} days, {hours} hours, {minutes} minutes and {seconds} seconds.</Subtext>);
};

const TitleImage = () => (
    <Wrapper>
        <div>
            <Header>
                Welcome to MUNOG 2023
            </Header>
            <Countdown date={1697752800000} />
            <a href="https://munog.de/register-school">
                <HeaderButton top={500} left={50}>Apply</HeaderButton>
            </a>
            <a href="./prepare.html">
                <HeaderButton top={570} left={50}>Prepare</HeaderButton>
            </a>
            {iOS && <a href="MUNOG 2023.ics">
                    <HeaderButton top={640} left={50}>Save the Date</HeaderButton>
                </a>
            }

        </div>
        <Arrow onClick={scrollDown}>
            <i className="fa-solid fa-chevron-down fa-2x"></i>
        </Arrow>
    </Wrapper>
)

export default TitleImage