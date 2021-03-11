import React, { useEffect, useState } from "react";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import PageHeaderNav from "../../components/PageHeaderNav/PageHeaderNav";
import { connect } from "react-redux";
import axios from "axios";
import { selectProperty } from "../../redux/property/propertySelector";
import PropertyItems from "../PropertyItems/PropertyItems";
import LoadSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { updateProperties } from "../../redux/property/propertyAction";

import "../../sass/style.scss";

const PropertyItemsWithSpinner = LoadSpinner(PropertyItems);

function PropertiesPage({ updateProperties, listings }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://api.simplyrets.com/properties", {
        auth: { username: "simplyrets", password: "simplyrets" },
      });
      updateProperties(res.data);
      setLoading(false);
    };

    getData();
  }, []);

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

const mapStateToProps = (state) => ({
  listings: selectProperty(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateProperties: (propertiesMap) =>
    dispatch(updateProperties(propertiesMap)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PropertiesPage);
