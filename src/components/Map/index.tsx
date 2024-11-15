import './styles.css'

const Map = () => {
    return (
        <section className="m-wrapper">

            <div className="flexCenter paddings innerWidth m-container">
                <iframe className='m-iframe'
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3674.468546937851!2d-43.176194!3d-22.9329652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f3d6ccac047%3A0xa4251c09f0e88b35!2sPrimo%20Atto%20-%20Terapia%20Ocupacional!5e0!3m2!1spt-BR!2sbr!4v1715945809053!5m2!1spt-BR!2sbr"
                    width="850"
                    height="450"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                />
            </div>
        </section>
    )
}

export default Map
