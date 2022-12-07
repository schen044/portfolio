import SimpleImageSlider from "react-simple-image-slider";
export default function HCGIMTrackerPage() {
    let githubImage = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>;
    const images = [
      { url: "images/hcgim.png" },
      { url: "https://github.com/schen044/HCGIM-Tracker/raw/main/public/goals.png" },
    ];
    return (
        <div>
          <h1>HCGIM Tracker</h1>
          <div className="project-info">
            <a href="https://github.com/schen044/HCGIM-Tracker" target="_blank"><button className="github-button">{githubImage} &nbsp; Github Repo Link</button></a>
            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
          </div>

          <div className="project-body">
            <div>         
              <SimpleImageSlider
              width={896}
              height={504}
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
            /></div>
            <div className="text">The HCGIM Tracker was created as a lightweight alternative to the more bloated tracker created as a Google doc. In addition to a few pregenerated goals, a user can add, edit, and delete their own custom goals. They can also view their skills and other stats pulled from the OSRS index_lite API, so they can track their levels without needing to constantly update.</div>
          </div>
      </div>
    )
}
