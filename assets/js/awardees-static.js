---
---

$(function () {
    var options = {
        valueNames: ["title", "awardeeName", "city", "piName", "amount", "abstractText", "awardeeStory"],
    };
    var awardsDetailsList = new List("awards-details-list", options);
    window.awardsDetailsList = awardsDetailsList;
    var awardsLists = [awardsDetailsList];
    if ($("#awards-details-list-phase-2").length) {
        var awardsDetailsList2 = new List("awards-details-list-phase-2", options);
        window.awardsDetailsList2 = awardsDetailsList2;
        awardsLists.push(awardsDetailsList2);
    }
    if ($("#awardee-story").length) {
        var awardeeStoryList = new List("awardee-story", options);
        window.awardeeStoryList = awardeeStoryList;
        awardsLists.push(awardeeStoryList);
    }
    function smush(string) {
        return (string || "")
            .toString()
            .trim()
            .toLowerCase()
            .replace("&amp;", "")
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "")
            .replace(/-/g, "");
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
            }
        }
    }

    function hasPitchbookData(award) {
        return !!(award.PitchbookCompanyDescription + award.PitchbookYearFounded + award.PitchbookNumberEmployees + award.PitchbookTotalRaised + award.PitchbookWebsite).trim().length;
    }
   
    function val(v, opt) {
        if (!v) return "";
        return (opt && opt.prefix ? opt.prefix : "") + (opt && opt.protocol && !v.match(/^https?\:\/\//) ? "http://" : "") + v + (opt && opt.suffix ? opt.suffix : "");
    }
      
    function pitchBookData(awd) {
        return (
            "" +
            (val(awd.PitchbookCompanyDescription) ? "<p>" + val(awd.PitchbookCompanyDescription) + "</p>" : "") +
            (val(awd.PitchbookWebsite) ? '<p><a href="' + val(awd.PitchbookWebsite, { protocol: true }) + '" class="usa-button usa-button-primary">VISIT WEBSITE</a></p>' : "") +
            '<div class="awardee-profile__stats">' +
            '<div class="usa-grid">' +
            (val(awd.PitchbookTotalRaised, { prefix: "$" })
                ? '<div class="usa-width-one-third">' +
                  '<div class="awardee-profile__stats-column">' +
                  "<h4>Total Raised</h4>" +
                  '<p class="awardee-profile__stat-single">' +
                  val(awd.PitchbookTotalRaised, { prefix: "$" }) +
                  "</p>" +
                  "</div>" +
                  "</div>"
                : "") +
            (val(awd.PitchbookYearFounded)
                ? '<div class="usa-width-one-third">' + '<div class="awardee-profile__stats-column">' + "<h4>Year Founded</h4>" + '<p class="awardee-profile__stat-single">' + val(awd.PitchbookYearFounded) + "</p>" + "</div>" + "</div>"
                : "") +
            (val(awd.PitchbookNumberEmployees)
                ? '<div class="usa-width-one-third">' +
                  '<div class="awardee-profile__stats-column">' +
                  "<h4>Number of Employees</h4>" +
                  '<p class="awardee-profile__stat-single">' +
                  val(awd.PitchbookNumberEmployees) +
                  "</p>" +
                  "</div>" +
                  "</div>"
                : "")
        );
        "</div>" + "</div>";
    }

    function pitchBookDataSection(pitch_book_data) {
        return (
            "" +
            '<div class="pitchbook">' +
            '<p class="pitchbook-source" style="text-align:right;font-size:1.4rem;"><em>This information has been provided by</em>' +
            '<img width="150px"style="margin-left:5px;"src="../../../assets/img/pitch-book-logo.png" /></p><br>' +
            (pitch_book_data || "<h3>No data found</h3>") +
            '<span class="pitchbook-disclaimer" style="font-size:1.2rem;"><em>Disclaimer: Company Data presented by NSF: (1) is the property of and proprietary to PitchBook Data, Inc.; (2) may not be copied, reproduced, or distributed; and (3) is not warranted to be accurate, complete nor timely. Neither PitchBook Data nor the National Science Foundation are responsible for any damages or losses arising from any use of such Data.</em></span>' +
            "</div>"
        );
    }
    function showFailure(text) {
        var text = text || getQueryVariable("company");
        var visibleAwards = awardsLists.map(function (list) {
            return list.visibleItems.length > 0;
        });
        if (visibleAwards.indexOf(true) >= 0) {
            $(".results-failure").hide();
            $(".awards-search-form").hide();
        } else {
            $(".results-query").text(text);
            $(".results-failure").show();
            $(".awards-search-form").show();
        }
    }
    var urlCompany = smush(getQueryVariable("company"));
    var matchingCompany = null;
    var $header = $("#awardee-header");
    if (urlCompany && urlCompany.length) {
        awardsLists.forEach(function (list) {
            if (list) {
                var listShowing = false;
                var $listContainer = $(list.listContainer);
                list.filter(function (company) {
                    var isMatching = smush(company.values().awardeeName) == urlCompany;
                    if (!matchingCompany) {
                        // First time finding the company in a list
                        $header.find(".results-company-title").text(company.values().awardeeName).show();
                    }
                    if (isMatching) {
                        $listContainer.show();
                        listShowing = true;
                        matchingCompany = urlCompany;
                    }
                    return isMatching;
                });
            }
            if (!listShowing) {
                $listContainer.hide();
            }
        });
    }
    if (matchingCompany) {
        // Found a match
        var $container = $(".portfolio-details");
        if (awardeeStoryList.visibleItems.length > 0) {
            $container.addClass("portfolio-details--has-story");
        }
        if (awardsDetailsList2.visibleItems.length > 0) {
            $container.addClass("portfolio-details--has-p2");
        }
        if (awardsDetailsList.visibleItems.length > 0) {
            $container.addClass("portfolio-details--has-p1");
        }
        // Populate Phase Information with Phase II if it's set, otherwise Phase I
        var phaseStr = "Phase I";
        if (awardsDetailsList2.visibleItems.length > 0) {
            phaseStr = "Phase II";
        }
        $header.find(".results-phase").show().text(phaseStr);
        // Populate Profile Information
        var $profile = $(".awardee-profile");
        var url = $profile.data("pitchbook-info");
        if (url && url.length) {
            fetch(url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (awards_history) {
                    // Grab the first entry that matches
                    let award = awards_history.filter(function (awrd) {
                        return smush(awrd.CompanyUrl) == matchingCompany;
                    });
                    return Promise.resolve(award);
                })
                .then(function (award) {
                    let html = "";
                    for (let [awdIndex, awd] of award.entries()) {
                        if (!html) {
                            html = hasPitchbookData(awd) ? pitchBookData(awd) : "";
                            break;
                        }
                    }
                    var $data = $profile.find(".awardee-profile__data");
                    var $nodata = $profile.find(".awardee-profile__no-data");
                    if (html && html.length) {
                        $data.html(html).show();
                        $nodata.hide();
                    } else {
                        $data.hide();
                        $nodata.show();
                    }
                });
        }
    }
  

  showFailure();

  $(".results-loading").hide();
    $(".results").show();

  window.searchAwards = function searchAwards(value) {
        awardsLists.forEach(function (list) {
            if (list) {
                list.filter();
                list.fuzzySearch(value);
            }
        });

    $(".results-loading").show();
        setTimeout(function () {
            $(".results-loading").hide();
            showFailure(value);
        }, 1);
        return false;
    };
	$( ".full-bleed-bg" ).filter( ":visible" ).odd().addClass( "full-bleed-bg--blue" ); // adds blue background to all the odd visible components
});
