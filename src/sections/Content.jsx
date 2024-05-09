import Artists from './components/Artists';
import Calendar from './components/Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faBullhorn } from '@fortawesome/free-solid-svg-icons';

export default function Content() {
  return (
    <section className="content">
      <div className="left-content">
        <div className="box">
          <Artists />
        </div>
        <div className="left-bottom box">
          <Calendar />
        </div>
      </div>

      <div className="right-content">
        <div className="store-container box">
          <div className="user-info">
            <div className="header-container">
              <div className="icon-container">
                <FontAwesomeIcon icon={faStore} className="nav-icon" />
              </div>
              <h4>Store</h4>
            </div>
            <img src="../img/pfp.jpg" alt="" />
          </div>

          <a target="_blank" rel="noreferrer"
             href="https://ciliegia.bigcartel.com/product/i-mostri-col-cazzo-che-si-nascondono-sotto-alle-lenzuola">
            <div className="store-box-container">
              <div className="store-box">
                <img src="../img/music/cover-art/i-mostri-col-cazzo-che-si-nascondono-sotto-alle-lenzuola.jpg" alt="" />
                <div className="calories-content">
                  <p><b>i mostri col cazzo che si nascondono sotto alle lenzuola</b></p>
                  <p>ciliegia suicidio</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="friends-activity box">
          <div className="header-container">
            <FontAwesomeIcon icon={faBullhorn} className="nav-icon" />
            <h1>Annunci</h1>
          </div>
          <div className="card-container">

            <div className="card">
              <div className="card-user-info">
                <img src="../img/pfp.jpg" alt="" />
                <h2>Admin</h2>
              </div>
              <p>Informazione riguardo a qualcosa in certa data.</p>
            </div>

            <div className="card">
              <div className="card-user-info">
                <img src="../img/pfp.jpg" alt="" />
                <h2>ciliegia suicidio</h2>
              </div>
              <img className="card-img" src="../img/pfp.jpg" alt="" />
              <p>Informazione su qualcosa ciliegia suicidio di importante</p>
            </div>

            <div className="card card-two">
              <div className="card-user-info">
                <img src="../img/pfp.jpg" alt="" />
                <h2>Qualcun altro</h2>
              </div>
              <img className="card-img" src="../img/pfp.jpg" alt="" />
              <p>Roba vecchia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
