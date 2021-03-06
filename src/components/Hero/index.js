import { Link } from "react-router-dom"
import { AppRoutes } from "constants/index"
import { CateHero, PlanetBlue } from "resources/index"
import { catemoonAddress, wBNBAddress } from "constants/index"
import "./style.scss"

const makeUnified = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Hero = ({ holders, price, marketcap = 0 }) => (
  <div className="hero flex flex-column">
    <div className="hero-wrapper container">
      <div className="hero-title flex flex-column">
        <h1>
          CATEMOON STARTS A NEW GENERATION OF <span>DEFI MEME</span> COINS
        </h1>
        <div className="flex">
          <a
            className="flex"
            href={`https://pancakeswap.finance/swap?inputCurrency=${wBNBAddress}&outputCurrency=${catemoonAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            Pancakeswap
          </a>
          <Link className="flex" to={AppRoutes.Verify}>
            Get Airdrops!
          </Link>
        </div>
      </div>
      <div className="hero-image flex">
        <CateHero />
      </div>
    </div>
    <div className="hero-ticker container">
      <div className="hero-ticker-item flex flex-column">
        <div>{holders}</div>
        <span>Holders</span>
      </div>
      <div className="hero-ticker-item flex flex-column">
        <div>{price}</div>
        <span>
          Price <span>(USD)</span>
        </span>
      </div>
      <div className="hero-ticker-item flex flex-column">
        <div>{makeUnified(100000000000)}</div>
        <span>Supply</span>
      </div>
      <div className="hero-ticker-item flex flex-column">
        <div>{makeUnified(marketcap)}</div>
        <span>
          FDV <span>(USD)</span>
        </span>
      </div>
    </div>
    <PlanetBlue />
  </div>
)

export default Hero
