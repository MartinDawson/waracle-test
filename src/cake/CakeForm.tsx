import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

export interface ICakeFormProps extends RouteComponentProps {
    name?: string;
    comment?: string;
    imageUrl?: string;
    yumFactor?: string;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    titleText: string;
}

const NAME = 'name';
const COMMENT = 'comment';
const IMAGE_URL = 'imageUrl';
const YUM_FACTOR = 'yumFactor';

const CakeForm: React.FC<ICakeFormProps> = (props) => {
    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        props.handleSubmit(e);

        props.history.push('/cakes');
    }, [props.handleSubmit]);

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <h1>{props.titleText}</h1>

                <div>
                    <label htmlFor={NAME}>Name
                        <input
                            defaultValue={props.name}
                            name={NAME}
                            id={NAME}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor={COMMENT}>Comment
                        <input
                            defaultValue={props.comment}
                            name={COMMENT}
                            id={COMMENT}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor={IMAGE_URL}>
                        Image URL
                        <input
                            defaultValue={props.imageUrl}
                            name={IMAGE_URL}
                            id={IMAGE_URL}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor={YUM_FACTOR}>
                        Yum Factor
                        <input
                            defaultValue={props.yumFactor}
                            name={YUM_FACTOR}
                            type="number"
                            min="1"
                            max="5"
                            id={YUM_FACTOR}
                        />
                    </label>
                </div>

                <button>Save</button>
            </form>
        </>
    );
};

export default withRouter(CakeForm);