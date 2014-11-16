// ==UserScript==
// @name       Fronter Fixes (Dalarna University)
// @namespace  https://github.com/MeeperMogle
// @version    0.2
// @changes    0.2: New function: Saving direct links to folders via checkboxes, for faster access later.
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
 * - (New) Save direct links to folders within the depths of Fronter - get there in no time through the new Dashboard!
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

// We will be doing some storing in localStorage.
// This variable control the stored data (no sensitive data is stored!)
// and is populated via the below function.
var links;
function getStoredThings(){
    links = localStorage.getItem('fronter_fixes_links');
    
    if(!links){
        links = ":";
        saveStoredThings();
    }
}

// Save the links to storage
function saveStoredThings(){
    localStorage.setItem('fronter_fixes_links', links);
}

// Add a link
function addLink(id,name){
    // Take away some anoying elements of the name
    name = name.replace(/&nbsp;/gi,"");

    // Check that it's not already Saved, then add it.
    if(links.indexOf(id+":"+name) == -1){
        if(links != ":")
            links += "," + id+":"+name;
        else
            links = id+":"+name;
    }
    
    // Save and re-load the new list of links
    saveStoredThings();
    getStoredThings();
}
// Remove a link from the list
function removeLink(id,name){
    // Different ways of deletion depending on where
    // in the list the one we want deleted is.
    // It'll be deleted in one way or another.
    if(links.indexOf("," + id+":"+name) != -1){
        links = links.replace("," + id+":"+name,"");
    } else if(links.indexOf(id+":"+name+",") != -1){
        links =  links.replace(id+":"+name+",","");
    } else if(links.indexOf(id+":"+name) != -1){
        links =  links.replace(id+":"+name,"");
    } else{
        
    }
    
    // Save and re-load the new list of links
    saveStoredThings();
    getStoredThings();
}

// Rum-list frame.
if(location.href == "https://fronter.com/hda/personalframe.phtml"){
    // Apply the function to translate the course-codes.
    // The common class name for the links in this list is currently "room-list-link"
    courseLinkNameChange("room-list-link", true);
}
// Alla rum-view
else if(location.href.indexOf("https://fronter.com/hda/adm/projects.phtml") != -1){
    // Apply the function to translate the course-codes.
    // The common class name for the links in this list is currently "black-link"
    courseLinkNameChange("black-link", false);
}
    // Add checkboxes to folders in the directory tree.
    else if(location.href.indexOf("https://fronter.com/hda/links/structureprops.phtml?treeid=") != -1
           || location.href.indexOf("https://fronter.com/hda/links/structureprops.phtml?temp=temp&init_load=1") != -1){
        getStoredThings();
        
        // Extensive selector to make sure that we
        // - select all folders
        // - don't select any kind of file, forum, discussion, note or anything else.
        // This function is built for folders, nothing else should have checkboxes.
        $('a.black-link[href*="structureprops.phtml"]').not('[href*="contacts"]').each(function(){
            // Find the ID and Name of the folder.
            var id = $(this).attr('href').substring($(this).attr('href').lastIndexOf('=')+1);
            var name = $(this).html().replace(/&nbsp;/gi,"");
            
            // Add a checkbox to the folder
            $(this).parent().append(' - Saved <input type=checkbox id=store_' + id + '>');
            
            // If the folder is already saved, tick the checkbox.
            // We need to know that we are looking at a saved folder.
            if(links.indexOf(id+":"+name) != -1)
                $('#store_' + id).prop('checked',true);
            
            // When the checkbox is clicked...
            $('#store_' + id).click(function(){
                // Get up-to-date version of saved links
                getStoredThings();
                
                // If we just turned it to [X]
                if(this.checked){
                    // Add the folder to our list of saved folders
                    addLink(id,name);
                }
                // If we just turned it to []
                else{
                    // Remove the folder from our list of saved folders
                    removeLink(id,name);
                }
            });
        });
    }
    
    
    // Remove the "Radera"-button which appears on some shared documents.
    // The problem is that the "Radera" (Delete) button is next to the "Redigera" (Edit) button.
    // To prevent accidental clicking of Radera when we want to Redigera, we remove the Radera button.
    else if(document.location.href.indexOf("https://fronter.com/hda/bwwrite/index.phtml?post_keeper_id=") != -1){
        $('a[onclick*="ta bort"]:contains("Radera")').siblings('img').remove();
        $('a[onclick*="ta bort"]:contains("Radera")').hide();
    }
        // On the main page, outside all of the frames.
        // Here we want to add access to the Dashboard, so that's accessible from any page.
        else if(location.href=="https://fronter.com/hda/main.phtml"){
            
            // Button to show & hide the settings which we will soon create
            $('#banner-container').prepend("<div id=showButton></div>");
            $('#showButton').css('position','absolute').css('left','40%').css('margin-top','28px');
            $('#showButton').append("<span class=toClose>Close => </span> <input type=submit value='Fixes Dashboard' id=customButton1> <span class=toClose> <= Close</span>");
            $('.toClose').css('font-weight','bold').css('visibility','hidden');
            
            // When to Fixes Dashboard-button is pressed...
            $('#showButton').click(function(){
                // If the Dashboard is currently hidden,
                if($('#ourDashboard').css('display') == 'none'){
                    // show the dashboard.
                    $('#ourDashboard').show();
                    $('.toClose').css('visibility','visible');
                    
                    // Fetch an up-to-date lit of our saved links
                    getStoredThings();
                    
                    // Add some information to the Dashboard
                    $('#ourDashboard').append("<h2>Fronter Fixes Dashboard (<a href='https://github.com/MeeperMogle/fronter_fixes_du' target=_githubFronter>Homepage</a>)</h2>");
                    $('#ourDashboard').append("<h3>Saved direct links</h3>");
                    $('#ourDashboard').append("By ticking boxes next to folders, direct links to them will show up here.<br>");
                    $('#ourDashboard').append("By using this feature you can quickly get to important folders with few clicks.<p>");
                    
                    // Fetck an array of all our separated, saved, links for easy management.
                    var splitLinks = links.split(",");
                    
                    // Loop through them.
                    for(i=0; i<splitLinks.length; i++){
                        // If it's not empty for some reason, we work with it.
                        if(splitLinks[i].split(":")[0] != ""){
                            // Fetch the ID and Name
                            var id = splitLinks[i].split(":")[0];
                            var name = splitLinks[i].split(":")[1];
                            
                            // Start building a link to the folder.
                            var codeToAdd = '<a href="https://fronter.com/hda/links/structureprops.phtml?treeid=';
                            codeToAdd += id;
                            codeToAdd += '" target=_blank'+id+'>';
                            codeToAdd += name;
                            codeToAdd += '</a>';
                            
                            // For ease of use, we add a checkbox for un-saving the Folder directly from the Dashboard.
                            codeToAdd += ' <input type=checkbox class="removersL" id="remove_' + id + ':' + name + '" checked><br>';
                            
                            // Add the link and checkbox to the Dashboard.
                            $('#ourDashboard').append(codeToAdd);
                            
                            // Repeat for all the links!
                        }
                    }
                    // If we click on one of the checkboxes,
                    $('.removersL').click(function(){
                        // fetch the corresponding ID and name.
                        var id = $(this).attr('id').replace("remove_","").split(":")[0];
                        var name = $(this).attr('id').replace("remove_","").split(":")[1];
                        
                        // If the box is nox [X]
                        if(this.checked){
                            // (Re) save it to the list of saved links
                            addLink(id,name);
                        }
                        else{
                            // Remove the folder from the list of saved links
                            removeLink(id,name);
                        }
                        
                        // This happens for any one of the checkboxes, meaning all of them will work.
                    });
                }
                else{
                    // If the Dashboard was currently visible, instead we want to hide it again.
                    $('#ourDashboard').hide();
                    $('.toClose').css('visibility','hidden');
                    $('#ourDashboard').html('');
                }
                return false;
            });
            
            // Visual properties of the Dashboard
            $('#banner-container').prepend("<div id=ourDashboard style='display:none;'></div>");
            $('#ourDashboard').css('position','absolute').css('left','1%').css('margin-top','50px').css('border-radius','20px');
            $('#ourDashboard').css('width','90%').css('height','500px').css('background-color','white').css('border','1px solid black');
            $('#ourDashboard').css('padding','20px');
        }
        
