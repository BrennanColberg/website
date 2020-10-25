import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

const SplashPage = () => (
  <>
    <div style={{ gridArea: 'logo' }}>
      <Logo />
    </div>

    <main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur id non ita
        fit? Et quod est munus, quod opus sapientiae? Fatebuntur Stoici haec
        omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse.
        Duo Reges: constructio interrete. Poterat autem inpune; Septem autem
        illi non suo, sed populorum suffragio omnium nominati sunt. Aliter autem
        vobis placet. Poterat autem inpune; Videsne, ut haec concinant? Nummus
        in Croesi divitiis obscuratur, pars est tamen divitiarum.
      </p>
    </main>

    <div style={{ gridArea: 'nav' }}>
      <Navigation />
    </div>
  </>
)

export default SplashPage
