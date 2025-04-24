const Footer = () => {
  return (
    <div className="bg-[#E8E7AB] px-[200px] h-[60vh] mt-[40px]">
      {/* upper part of the footer */}
      <div  className="flex justify-between py-[5%]">
        <div>
          <img
            src="/Trendora1.png"
            alt="Trendora logo"
            height={250}
            width={250}
          />
          <p className="mt-2 font-semibold text-2xl">
            Bags for every adventure!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Our Policies
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-2">Kufr Rumman, Tulkarm, Palestine</p>
          <p className="mt-2">Arraba, Jenin, Palestine</p>
          <p className="mt-2">Phone: (970) 1111111 </p>
          <p className="mt-2">Email: info@trendora.com </p>
        </div>
      </div>

      {/* lower part of the footer */}
      <div className="bg-[#E8E7AB] border-t border-[#e9acd9] text-center">
  <p className="mt-3">&copy; 2025 Trendora. All rights reserved.</p>
  <div className="flex justify-center space-x-4 mt-4">
    {/* Facebook */}
    <a href="#" className="hover:text-red-400" aria-label="Facebook">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.325-.597 1.325-1.334V1.333C24 .597 23.403 0 22.675 0z" />
      </svg>
    </a>

    {/* Instagram */}
    <a href="#" className="hover:text-red-400" aria-label="Instagram">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 011.675 1.09 4.92 4.92 0 011.09 1.675c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.902 4.902 0 01-1.09 1.675 4.902 4.902 0 01-1.675 1.09c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.902 4.902 0 01-1.675-1.09 4.902 4.902 0 01-1.09-1.675c-.163-.457-.347-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 011.09-1.675A4.92 4.92 0 015.4 2.636c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.162 0-3.524.012-4.768.069-1.002.046-1.547.213-1.91.355a3.09 3.09 0 00-1.13.738 3.09 3.09 0 00-.738 1.13c-.142.363-.309.908-.355 1.91-.057 1.244-.069 1.606-.069 4.768s.012 3.524.069 4.768c.046 1.002.213 1.547.355 1.91.175.447.406.83.738 1.13a3.09 3.09 0 001.13.738c.363.142.908.309 1.91.355 1.244.057 1.606.069 4.768.069s3.524-.012 4.768-.069c1.002-.046 1.547-.213 1.91-.355a3.09 3.09 0 001.13-.738 3.09 3.09 0 00.738-1.13c.142-.363.309-.908.355-1.91.057-1.244.069-1.606.069-4.768s-.012-3.524-.069-4.768c-.046-1.002-.213-1.547-.355-1.91a3.09 3.09 0 00-.738-1.13 3.09 3.09 0 00-1.13-.738c-.363-.142-.908-.309-1.91-.355-1.244-.057-1.606-.069-4.768-.069zm0 3.838a6 6 0 100 12 6 6 0 000-12zm0 1.838a4.162 4.162 0 110 8.324 4.162 4.162 0 010-8.324zm6.406-1.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    </a>

    {/* TikTok */}
    <a href="#" className="hover:text-red-400" aria-label="TikTok">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.87 2H9.5v15.2a2.3 2.3 0 11-2.3-2.3 2.32 2.32 0 011.3.4V11.7a5.7 5.7 0 00-.8-.05 5.5 5.5 0 105.5 5.5V8a6.3 6.3 0 003.5 1.1V6.3a3.68 3.68 0 01-3.3-4.3z" />
      </svg>
    </a>
  </div>
</div>


    </div>
  );
};

export default Footer;
