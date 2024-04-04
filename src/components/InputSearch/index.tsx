import './styles.css';

type Props = {
    label: string;
}

export default function InputSearch({label }: Props) {

    return (
        <div>
            <input type="text" placeholder={label} />
        </div>
    );
}