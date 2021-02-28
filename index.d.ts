interface Category {
  category_id: string
  category_name: string
  parent_id: number
}

interface Stream {
  container_extension: string
  num: number
  name: string
  stream_type: string
  stream_id: number
  stream_icon: string
  epg_channel_id: number
  added: string
  category_id: string
  custom_sid: string
  tv_archive: number
  direct_source: string
  tv_archive_duration: number
}
