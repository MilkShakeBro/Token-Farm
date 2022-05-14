import './Defi.css';

export const Defi = () => {
    return (
        <header className="container-fluid" id="banner">
        <div className="row justify-content-lg-center align-items-lg-center" id="banner-background-content">
            <div className="col-12 col-lg-1"></div>
            <div className="col-12 col-lg-5 drop-shadow" id="banner-text-background-content">
                <h2 id="banner-title">Playing. Learning. Have Fun !</h2>
                <p  id="banner-subtitle">
                  GameToMem 是一款利用遊戲解決單字老是背不起來的問題，
                  當你想快速提升英文能力，
                  就讓 GameToMem 幫你一把！
                </p>
                <a href="https://www.google.com" target="_blank" className="btn btn-sm btn-light" role="button" id="banner-button"><i className="far fa-bell me-3"></i>關注我們</a>
                <div><a href="#section-1"><i id="banner-arrow" className="fa fa-chevron-down mb-2" aria-hidden="true"></i></a></div>
            </div>
            <div className="col-12 col-lg-6">
            </div>
        </div>
    </header>
    );
};