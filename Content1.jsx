import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
    static defaultProps = {
        className: 'content0',
    };

    render() {
        const props = {...this.props};
        const isMode = props.isMode;
        delete props.isMode;
        const animType = {
            queue: isMode ? 'bottom' : 'right',
            one: isMode ? {y: '+=30', opacity: 0, type: 'from'}
                : {x: '-=30', opacity: 0, type: 'from'},
        }
        return (
            <div
                {...props}
                className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
            >
                <OverPack
                    className={`content-template ${props.className}`}
                    location={props.id}
                >
                    <TweenOne
                        key="img"
                        animation={animType.one}
                        className={`${props.className}-img`}
                        id={`${props.id}-imgWrapper`}
                        resetStyleBool
                    >
            <span id={`${props.id}-img`}>
              <img width="100%" src="https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png"/>
            </span>
                    </TweenOne>
                    <QueueAnim
                        className={`${props.className}-text`}
                        type={animType.queue}
                        key="text"
                        leaveReverse
                        ease={['easeOutCubic', 'easeInCubic']}
                        id={`${props.id}-textWrapper`}
                    >
                        <h1 key="h1" id={`${props.id}-title`}>
                            文字文字文字文字
                        </h1>
                        <p key="p" id={`${props.id}-content`}>
                            文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                            文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                        </p>
                    </QueueAnim>
                </OverPack>
            </div>
        );
    }
}


export default Content;
