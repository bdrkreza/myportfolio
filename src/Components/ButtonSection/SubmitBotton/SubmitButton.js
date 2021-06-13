import React from 'react';
import './SubmitButton.scss'
const SubmitButton = () => {

    return (
        <div className="danger">
            <div className='submit_button'>
                <div class="button">
                    <h1>Fizzy CSS Button</h1>
                    <h2>With super fizzy particle action</h2>
                    <a href="https://www.codepen.io/jcoulterdesign">
                        <i class="ion-social-codepen"></i>
                        <span>More Codepen shenanigans</span>
                    </a>
                    <input id="button" type="checkbox"></input>
                    <label for="button">
                        <div class="button_inner q">
                            <i class="l ion-log-in"></i>
                            <span class="t">Downloads</span>
                            <span>
                                <i class="tick ion-checkmark-round"></i>
                            </span>
                            <div class="b_l_quad">

                                <div class="button_spots"></div>

                            </div>
                        </div>
                    </label>
                </div>

            </div>
        </div>
    );
};

export default SubmitButton;