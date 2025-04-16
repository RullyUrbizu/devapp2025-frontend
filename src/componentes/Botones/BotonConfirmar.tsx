interface BotonConfirmarProps {
    funcion: () => void;
}

export const BotonConfirmar = ({ funcion }: BotonConfirmarProps) => {
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={funcion}>
                Confirmar
            </button>
        </>
    );
};
