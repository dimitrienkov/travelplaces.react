import API from '@/services/api';

class PostService {
    static async getPosts(page, perPage) {
        const _start = () => {
            if (page > 1) {
                return page * perPage;
            }

            return 0;
        };

        const _end = () => {
            if (page > 1) {
                return (page + 1) * perPage;
            }

            return perPage;
        };

        return await API.get('posts', {
            params: {
                _start: _start(),
                _end: _end(),
            },
        });
    }
}

export default PostService;