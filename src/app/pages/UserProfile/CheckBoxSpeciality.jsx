import React from "react";


function CheckBoxSpeciality() {

    return(
        <div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                <label class="form-check-label" for="defaultCheck1">
                    Default checkbox
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled></input>
                <label class="form-check-label" for="defaultCheck2">
                    Disabled checkbox
                </label>
            </div>
        </div>
    )
}

export default CheckBoxSpeciality;