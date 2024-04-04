import './styles.css';

type Props = {
    content: string;
    onClick: () => void;
}

export default function ButtonCard({content, onClick}: Props) {

    return (
            <div className='rda-button' onClick={onClick}>
                <h3>{content}</h3>
            </div>
    );
}