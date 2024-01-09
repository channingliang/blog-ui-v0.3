// apiService.ts
type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH';

interface ApiConfig {
    body?: BodyInit | null;
    params?: { [key: string]: string | number | boolean };
}

export class ApiService {
    private async request(method: HttpMethod, url: string, config?: ApiConfig): Promise<Response> {
        let endpoint = url;
        const headers = new Headers();

        headers.append('Content-Type', 'application/json');

        const init: RequestInit = {
            method,
            headers,
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
        const response = await fetch(endpoint, init);
        return response;
    }

    public get(url: string, params?: { [key: string]: string | number | boolean }): Promise<Response> {
        return this.request('GET', url, { params });
    }

    public post(url: string, body?: BodyInit, params?: { [key: string]: string | number | boolean }): Promise<Response> {
        return this.request('POST', url, { body, params });
    }

    public delete(url: string, params?: { [key: string]: string | number | boolean }): Promise<Response> {
        return this.request('DELETE', url, { params });
    }

    public patch(url: string, body?: BodyInit, params?: { [key: string]: string | number | boolean }): Promise<Response> {
        return this.request('PATCH', url, { body, params });
    }
}
