let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', `page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                let li = document.createElement('li');
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1;
        }
    };
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            console.log(object)
        }
    };
    request.send()
}

getXML.onclick = () => {
    //创建XMLHttpRequest对象
    const request = new XMLHttpRequest()
    //调用open方法
    request.open('get', '4.xml')
    //监听对象的onload和onerror事件
    //但大神都用onreadystatechange事件
    request.onreadystatechange = () => {
        //下载完成，但不知道是成功（2xx）还是失败（4xx 5xx）
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text)
        }
    };
    request.send()
}

getHTML.onclick = () => {
    //创建XMLHttpRequest对象
    const request = new XMLHttpRequest()
    //调用open方法
    request.open('get', '3.html')
    //监听对象的onload和onerror事件
    request.onload = () => {
        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.appendChild(div);
    }
    request.onerror = () => {
    }
    //发送请求
    request.send()

}

getJS.onclick = () => {
    //创建XMLHttpRequest对象
    const request = new XMLHttpRequest()
    //调用open方法
    request.open('get', '2.js')
    //监听对象的onload和onerror事件
    request.onload = () => {
        const script = document.createElement('script');
        script.innerHTML = request.response;
        document.body.appendChild(script);
    }
    request.onerror = () => {
    }
    //发送请求
    request.send()

}

getCSS.onclick = () => {
    //创建XMLHttpRequest对象
    const request = new XMLHttpRequest()
    //调用open方法
    request.open('get', 'style.css')
    //监听对象的onload和onerror事件
    //但大神都用onreadystatechange事件
    request.onreadystatechange = () => {
        //下载完成，但不知道是成功（2xx）还是失败（4xx 5xx）
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建style标签
                const style = document.createElement('style');
                //填写style内容
                style.innerHTML = request.response;
                //插到head里面
                document.head.appendChild(style);
            } else {
                alert('加载CSS失败')
            }
        }
    }
    // request.onload = () => {
    //     console.log(request.response)
    //     //创建style标签
    //     const style = document.createElement('style');
    //     //填写style内容
    //     style.innerHTML = request.response;
    //     //插到head里面
    //     document.head.appendChild(style);
    // }
    // request.onerror = () => {
    //     console.log('fail')
    // }
    //发送请求
    request.send()
}