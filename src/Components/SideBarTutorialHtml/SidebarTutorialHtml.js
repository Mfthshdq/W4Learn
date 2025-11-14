import style from "./SidebarTutorialHtml.module.css"

function SidebarTutorialHtml() {
    return (
        <div>
            <div className={style.sidebar}>
                <div className={style.title}>
                    <p>HTML Tutorial</p>
                </div>
                <div>
                    <a className={style.active} href="#home">HTML HOME</a>
                    <a href="#news">HTML Introduction</a>
                    <a href="#contact">HTML Editors</a>
                    <a href="#about">HTML Basic</a>
                    <a href="#news">HTML Elements</a>
                    <a href="#contact">HTML Attributes</a>
                    <a href="#about">HTML Headings</a>
                    <a href="#news">HTML Paragraphs</a>
                    <a href="#contact">HTML Styles</a>
                    <a href="#about">HTML Formatting</a>
                    <a href="#news">HTML Quotations</a>
                    <a href="#contact">HTML Comments</a>
                    <a href="#about">HTML Colors</a>
                    <a href="#news">HTML CSS</a>
                    <a href="#contact">HTML Link</a>
                    <a href="#about">HTML Image</a>
                    <a href="#news">HTML Favicon</a>
                    <a href="#contact">HTML PageTitle</a>
                    <a href="#about">HTML Tables</a>
                    <a href="#news">HTML Box</a>
                    <a href="#contact">HTML Block & Inline</a>
                    <a href="#about">HTML Div</a>
                    <a href="#news">HTML Classes</a>
                    <a href="#contact">HTML Id</a>
                    <a href="#about">HTML JavaScript</a>
                </div>
            </div>
        </div>
    )
}

export default SidebarTutorialHtml;