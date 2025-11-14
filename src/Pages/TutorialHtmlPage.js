import Footer from "../Components/Footer/Footer";
import NavbarOnOthrPage from "../Components/NavbarOnOthrPage/NavbarOnOthrPage";
import SidebarTutorialHtml from "../Components/SideBarTutorialHtml/SidebarTutorialHtml";
import TutorialHtml from "../Components/TutorialHtml/TutorialHtml";

function TutorialHtmlPage() {
    return (
        <div>
            <NavbarOnOthrPage />
            <SidebarTutorialHtml />
            <TutorialHtml />
            <Footer />
        </div>
    )
}
export default TutorialHtmlPage;