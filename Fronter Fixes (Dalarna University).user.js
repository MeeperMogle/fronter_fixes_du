// ==UserScript==
// @name       Fronter Fixes (Dalarna University)
// @namespace  https://github.com/MeeperMogle
// @version    0.1
// @changes    0.1: First beta release. Custom Rum-names. Removes "Radera"-button to prevent accidents...
// @description  Meant to make the life easier for students of Dalarna University when dealing with the Fronter platform.
// @match      https://fronter.com/hda/*
// @require    https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @author  Mogle
// @copyright https://raw.githubusercontent.com/MeeperMogle/youtubefixes/master/License.txt
// ==/UserScript==

/* Notice
 * 
 * This script was made by and for students of the programme Digitalbrott och eSäkerhet.
 * It is possible for students of other programmes/courses to use it as well,
 * however you will most likely need to add your own course-names to the list below.
 * 
 * The order of the list of courses doesn't matter, but they are currently sorted by
 * Digitalbrott och eSäkerhet start-semesters.
 */

/* Features
 * 
 * - Change course-code Rum-links to human readable. (Maintained manually, see next comment-section)
 * - Removes the "Radera"-button (Delete) on signup-forms, which is scarily closes to "Redigera" (Edit)...
 *
 */

/*
 * Remember that course codes and names of courses might be added or changed.
 * If that happens, you should be able to edit the code yourself by example.
 * Also, it might be a good idea to let the maintainer of this script
 * know of the change, so that it can be added here - for everyone.
 */

// Replace course-codes with actual names.
//
// linksCommonClassName: Look at the source code of the page.
// What class="..." do the course-room links on it have in common?
//
// hideSomeRooms: true hides rooms such as Support. false keeps them.
function courseLinkNameChange(linksCommonClassName, hideSomeRooms){
    // Fetch an array of all the links to course rooms
    var kursRum = document.querySelectorAll("a." + linksCommonClassName);
    
    // Loop through them
    for(i=0; i<kursRum.length; i++){
        // Save a reference to the current one in a variable.
        // This will let us check and, if necessary, change the link.
        var courseLink = kursRum[i];
        
        // One might want to hide these first rooms, they are rarely useful.
        // Therefore there is a parameter to set when calling the function.
        if(courseLink.innerHTML.indexOf('Needs Analysis') != -1){
            if(hideSomeRooms)
                courseLink.innerHTML = "";
        } else if(courseLink.innerHTML.indexOf('Studentcaf') != -1){
            if(hideSomeRooms)
                courseLink.innerHTML = "";
        } else if(courseLink.innerHTML.indexOf('Support') != -1){
            if(hideSomeRooms)
                courseLink.innerHTML = "";
        }
            // Actual courses start here.
            // Inside each else if-statement is the course code.
            // Inside the bracket is the place to put the course name you want.
            // If you want to hide it, just put ""
            
            // H14
            else if(courseLink.innerHTML.indexOf('DT1054') != -1){
                courseLink.innerHTML = "Intro IT-forensik";   
            } else if(courseLink.innerHTML.indexOf('RV1041') != -1){
                courseLink.innerHTML = "IT-rätt";
            } else if(courseLink.innerHTML.indexOf('DT1049') != -1){
                courseLink.innerHTML = "Grund. programmering";
            } else if(courseLink.innerHTML.indexOf('DT1052') != -1){
                courseLink.innerHTML = "Operativsystem";
            } else if(courseLink.innerHTML.indexOf('DT1060') != -1){
                courseLink.innerHTML = "Skript programmering";
            } else if(courseLink.innerHTML.indexOf('DT1061') != -1){
                courseLink.innerHTML = "Databassystem";
            } else if(courseLink.innerHTML.indexOf('RV1034') != -1){
                courseLink.innerHTML = "Utr. av databrott";
            } else if(courseLink.innerHTML.indexOf('DT1059') != -1){
                courseLink.innerHTML = "Kriminalteknisk... 1";
            } else if(courseLink.innerHTML.indexOf('DT1055') != -1){
                courseLink.innerHTML = "Fördjup. programmering";
            } else if(courseLink.innerHTML.indexOf('DT1050') != -1){
                courseLink.innerHTML = "Datakommunikation";
            } else if(courseLink.innerHTML.indexOf('ST1014') != -1){
                courseLink.innerHTML = "Statistik";
            } else if(courseLink.innerHTML.indexOf('DT1053') != -1){
                courseLink.innerHTML = "Internetapplikationer";
            } else if(courseLink.innerHTML.indexOf('DT1058') != -1){
                courseLink.innerHTML = "Etisk hackning";
            } else if(courseLink.innerHTML.indexOf('DT1051') != -1){
                courseLink.innerHTML = "Datakommunikation 2";
            } else if(courseLink.innerHTML.indexOf('?') != -1){
                courseLink.innerHTML = "Forskningsmetodik";
            } else if(courseLink.innerHTML.indexOf('?') != -1){
                courseLink.innerHTML = "IT-kriminologi";
            } else if(courseLink.innerHTML.indexOf('DT1057') != -1){
                courseLink.innerHTML = "Nätverkssäkerhet";
            } else if(courseLink.innerHTML.indexOf('DT2015') != -1){
                courseLink.innerHTML = "Utv. av mobila... 1";
            } else if(courseLink.innerHTML.indexOf('DT1056') != -1){
                courseLink.innerHTML = "Logik och matte";
            } else if(courseLink.innerHTML.indexOf('DT2016') != -1){
                courseLink.innerHTML = "Unders. av mobila... 2";
            } else if(courseLink.innerHTML.indexOf('DT2017') != -1){
                courseLink.innerHTML = "Kryptografi";
            } else if(courseLink.innerHTML.indexOf('DT2018') != -1){
                courseLink.innerHTML = "Kriminalteknisk... 2";
            } else if(courseLink.innerHTML.indexOf('DT2019') != -1){
                courseLink.innerHTML = "Biometri";
            } else if(courseLink.innerHTML.indexOf('DT2008') != -1){
                courseLink.innerHTML = "Examensarbete!";
            }
                // H13 & H12
                else if(courseLink.innerHTML.indexOf('DT1026') != -1){
                    courseLink.innerHTML = "Intro IT-forensik";   
                } else if(courseLink.innerHTML.indexOf('DT1033') != -1){
                    courseLink.innerHTML = "Grund. programmering";
                } else if(courseLink.innerHTML.indexOf('DT1042') != -1){
                    courseLink.innerHTML = "Operativsystem";
                } else if(courseLink.innerHTML.indexOf('DT1046') != -1){
                    courseLink.innerHTML = "Skript programmering";
                } else if(courseLink.innerHTML.indexOf('DT1034') != -1){
                    courseLink.innerHTML = "Databassystem";
                } else if(courseLink.innerHTML.indexOf('DT1035') != -1){
                    courseLink.innerHTML = "Kriminalteknisk... 1";
                } else if(courseLink.innerHTML.indexOf('?') != -1){
                    courseLink.innerHTML = "Forskningsmetodik";
                } else if(courseLink.innerHTML.indexOf('RV1035') != -1){
                    courseLink.innerHTML = "IT-kriminologi";
                }
                    
                    // H12 particulars
                    else if(courseLink.innerHTML.indexOf('DT1021') != -1){
                        courseLink.innerHTML = "Operativsystem";
                    } else if(courseLink.innerHTML.indexOf('DT1023') != -1){
                        courseLink.innerHTML = "Skript programmering";
                    } else if(courseLink.innerHTML.indexOf('DT1044') != -1){
                        courseLink.innerHTML = "Nätverkssäkerhet";
                    } else if(courseLink.innerHTML.indexOf('DT1062') != -1){
                        courseLink.innerHTML = "Utv. av mobila... 1";
                    } else if(courseLink.innerHTML.indexOf('DT1036') != -1){
                        courseLink.innerHTML = "Etisk hackning";
                    } else if(courseLink.innerHTML.indexOf('DT1038') != -1){
                        courseLink.innerHTML = "Fördjup. programmering";
                    } else if(courseLink.innerHTML.indexOf('DT1040') != -1){
                        courseLink.innerHTML = "Internetapplikationer";
                    } else if(courseLink.innerHTML.indexOf('DT1041') != -1){
                        courseLink.innerHTML = "Datakommunikation";
                    } else if(courseLink.innerHTML.indexOf('DT1045') != -1){
                        courseLink.innerHTML = "Datakommunikation 2";
                    } 
                        
                        else {
                            
                        }
    }
}

// Rum-button
if(location.href == "https://fronter.com/hda/personalframe.phtml"){
    courseLinkNameChange("room-list-link", true);
}
// Alla rum-view
else if(location.href.indexOf("https://fronter.com/hda/adm/projects.phtml") != -1){
    courseLinkNameChange("black-link", false);
}
    // Remove the "Radera"-button
    else if(document.location.href.indexOf("https://fronter.com/hda/bwwrite/index.phtml?post_keeper_id=") != -1){
        $('a[onclick*="ta bort"]:contains("Radera")').siblings('img').remove();
        $('a[onclick*="ta bort"]:contains("Radera")').hide();
    }
