
type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH';

interface ApiConfig {
    body?: BodyInit | null;
    params?: { [key: string]: string | number | boolean };
    // headers?: { [key: string]: string };
    cache?: RequestCache;
    next?: NextFetchRequestConfig;
}

export class ApiService {
    private baseURL = process.env.NEXT_PUBLIC_API_URL;
    private async request(method: HttpMethod, path: string, config?: ApiConfig): Promise<Response> {
        let endpoint = `${this.baseURL}/${path}`;
        const headers = new Headers();

        headers.append('Content-Type', 'application/json');

        // // 设置自定义请求头部
        // if (config?.headers) {
        //     for (const key in config.headers) {
        //         headers.append(key, config.headers[key]);
        //     }
        // }

        let init: RequestInit = {
            method,
            headers,
            cache: config?.cache,
            next: config?.next,
        };

        // 处理body
        if (config?.body) {
            init.body = JSON.stringify(config.body);
        }

        // 处理params
        if (config?.params) {
            const queryParams = new URLSearchParams(config.params as any).toString();
            endpoint += `?${queryParams}`;
        }

        // 发送请求
        return await fetch(endpoint, init);
    }

    public get(url: string, config?: ApiConfig): Promise<Response> {
        return this.request('GET', url, config);
    }

    public post(url: string, config?: ApiConfig): Promise<Response> {
        return this.request('POST', url, config);
    }

    public delete(url: string, config?: ApiConfig): Promise<Response> {
        return this.request('DELETE', url, config);
    }

    public patch(url: string, config?: ApiConfig): Promise<Response> {
        return this.request('PATCH', url, config);
    }
}

