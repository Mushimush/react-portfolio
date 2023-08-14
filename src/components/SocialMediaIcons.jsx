const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a href="/" className="hover:opacity-50 transition duration-500" target="_blank" rel="noreferrer">
                <img className="h-8 w-8" src="/assets/linkedin.png" alt="linkedin-link" />
            </a>
            <a href="/" className="hover:opacity-50 transition duration-500" target="_blank" rel="noreferrer">
                <img className="h-8 w-8" src="/assets/github-mark-white.png" alt="github-link" />
            </a>
        </div>
    )
}
export default SocialMediaIcons