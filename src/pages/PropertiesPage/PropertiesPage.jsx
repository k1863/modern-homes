import SearchComponent from "../../components/SearchComponent/SearchComponent";
import PageHeaderNav from "../../components/PageHeaderNav/PageHeaderNav";
import PropertyItems from "../PropertyItems/PropertyItems";
import LoadSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Route } from "react-router-dom";
import PropertyDetailsPage from "../PropertyDetailsPage/PropertyDetailsPage";
import "../../sass/style.scss";

const PropertyItemsWithSpinner = LoadSpinner(PropertyItems);

function PropertiesPage({ listings, loading, match }) {
  const imageUrl =
    "https://rcyneamb.sirv.com/page-header-bgs/pexels-expect-best-323780.jpg";

  function capitalize(s) {
    return s.toLowerCase().replace(/\b./g, function (a) {
      return a.toUpperCase();
    });
  }

  return (
    <div className="properties-page">
      <PageHeaderNav
        currentPage="Properties"
        className="properties-page__header"
        imageUrl={imageUrl}
      />
      <SearchComponent />
      <PropertyItemsWithSpinner
        capitalize={capitalize}
        listings={listings}
        isLoading={loading}
      />
    </div>
  );
}

export default PropertiesPage;
