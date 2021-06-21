import { h, Component } from 'preact';

export default class ArrowIcon extends Component {

    render({isOpened},{}) {
        return (
            <div>
                {/* keyboard arrow up */}
                { (isOpened) ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" style="width: 32px; margin:2px 0 0 10px;">
                        <path d="M9 9L24 24" stroke="#979797" stroke-width="2" stroke-linecap="square"/>
                        <path d="M8.49512 23.4586L24.5049 9.54144" stroke="#979797" stroke-width="2" stroke-linecap="square"/>
                    </svg>
                    :
                    <span class="fa-comment-alt far text-2xl text-yellow-400 ml-2"></span>
                }
            </div>
        );
    }
}
