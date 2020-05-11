import React, { Component } from 'react'
import { Skeleton } from 'antd'; //引入antd中的骨架屏
import LayOutContent from './LayOutContent';

export default class LayOut extends Component {

    /* 在此定义一个开关，控制骨架屏的显示与隐藏 */
    /* rconst快捷键 */
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        //真实DOM已经出来了
        setInterval(() => {
            this.setState({
                loading:false
            })
        }, 200);
    }
    //此处一般写0，当请求数据时会看到效果。上面写2000为了自己看效果。

    render() {
        const { loading } = this.state;
        //写判断条件,想看效果，加上active就可以了
        // if (loading) {
        //     return <Skeleton active avatar paragraph={{ rows: 10 }} />
        // } else {
        //     return <Skeleton active avatar paragraph={{ rows: 10 }} />
        //     return (
        //         <div>
        //             layout
        //         </div>
        //     )

        // 或者：
        return (
            <Skeleton loading={loading} active avatar paragraph={{ rows: 10 }} >
                {/* 里面放置的就是我们的代码 */}
                {/* layout */}
                <LayOutContent/>
            </Skeleton>
        )
        // }

    }

}

