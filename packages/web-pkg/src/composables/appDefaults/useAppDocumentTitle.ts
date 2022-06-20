import { Ref, computed, unref } from '@vue/composition-api'
import { basename } from 'path'
import { FileContext } from './types'
import { useAppMeta } from './useAppMeta'
import { useDocumentTitle } from './useDocumentTitle'
import { Store } from 'vuex'

interface AppDocumentTitleOptions {
  store: Store<any>
  document: Document
  applicationId: string
  currentFileContext: Ref<FileContext>
}

export function useAppDocumentTitle({
  store,
  document,
  applicationId,
  currentFileContext
}: AppDocumentTitleOptions): void {
  const appMeta = useAppMeta({ applicationId, store })

  const title = computed(() => {
    const fileName = basename(unref(unref(currentFileContext).fileName))
    const meta = unref(unref(appMeta).applicationMeta)

    return [fileName, meta.name || meta.id, store.getters.configuration.currentTheme.general.name]
      .filter(Boolean)
      .join(' - ')
  })

  useDocumentTitle({
    document,
    title
  })
}