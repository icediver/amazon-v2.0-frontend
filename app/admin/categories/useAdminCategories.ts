import { useMutation, useQuery } from '@tanstack/react-query'

import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'

import { getAdminUrl } from '@/config/url.config'

import { formatDate } from '@/utils/format-date'

import { CategoryService } from '@/services/category.service'

export const useAdminCategories = () => {
	const { data, isFetching, refetch } = useQuery({
		queryKey: ['get admin categories'],
		queryFn: () => CategoryService.getAll(),
		select: ({ data }) =>
			data.map((category): IListItem => {
				return {
					id: category.id,
					viewUrl: `/Categories/${category.slug}`,
					editUrl: getAdminUrl(`/Categoriess/edit/${category.id}`),
					items: [category.name, category.slug]
				}
			})
	})

	const { mutate } = useMutation({
		mutationKey: ['delete Categories'],
		mutationFn: (id: number) => CategoryService.delete(id),
		onSuccess() {
			refetch()
		}
	})

	return { mutate, data, isFetching }
}
