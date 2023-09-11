import clsx from 'clsx'
import { FC, forwardRef } from 'react'

import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, className, type = 'text', style, Icon, ...rest },
		ref
	) => {
		return (
			<div className={clsx('mb-4', className)} style={style}>
				<label htmlFor=''>
					<span className='mb-1 block'>
						{Icon && <Icon className='mr-3' />}
						{placeholder}
					</span>
					<input
						ref={ref}
						type={type}
						placeholder={placeholder}
						{...rest}
						className={clsx(
							'px-4 py-2 w-full outline-none focus:border-primary border',
							'border-gray border-solid transition-all placeholder:text-gray rounded-lg',
							{
								'border-red': !!error
							}
						)}
					/>
				</label>
				{error && <div className='text-red mt-1 text-sm'>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'
export default Field
