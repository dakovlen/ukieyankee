
export default function Footer() {
    return(
        <>
            <footer className="footer">
              <div className="footer-top bg-footer-top">
                  <div className="container grid grid-cols-3 gap-4">
                      <h3 className="footer-top__title">Donate Now</h3>
                      <form action="" className="donate_form">
                        <button className="flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"> Donate</button>
                      </form>
                  </div>
              </div>
              <div className="footer-bottom bg-footer-bottom">
                  <div className="container grid grid-cols-2 gap-3">
                        <div className="footer-info">
                            <h3 className="footer-title">Contacts</h3>

                            <a href="tel:+380123456789" className="tel">+380123456789</a>
                            <a href="mailto:tomacryan51@gmail.com" className="mail">tomacryan51@gmail.com</a>
                            <a href="" className="map-link" target="_blank">Украина г. Запорожье</a>
                        </div>

                      <div className="footer-info">
                          <form action="" className="footer-form">
                              <input type="email" placeholder="Email"/>
                              <button className="btn btn-action">donate</button>
                          </form>

                          <h3 className="footer-title">Connect with us</h3>
                            <div className="social-icon">
                                <a href="" className="social-link">
                                    <img src="https://res.cloudinary.com/detgwqdyd/image/upload/v1626795670/instagram_xbrzld.svg" alt="Instagram"/>
                                </a>

                                <a href="" className="social-link">
                                    <img src="https://res.cloudinary.com/detgwqdyd/image/upload/v1626795670/facebook_xiyqax.svg" alt="Facebook"/>
                                </a>

                                <a href="" className="social-link">
                                    <img src="https://res.cloudinary.com/detgwqdyd/image/upload/v1626795670/linkedin_v6acah.svg" alt="Linkedin"/>
                                </a>
                            </div>
                      </div>
                  </div>
              </div>
            </footer>
        </>
    )
}
